<?php
declare(strict_types=1);

namespace MergeMinifyRefresh;

/**
 * A list of WordPress dependancy handles to be merged
 */
class HandlesList
{
	private $handles = [];
	private $current = null;

	/**
	 * Get the list of handles to be merged.
	 *
 	 * @return array<array{?handles:string[],?deps:string[],?modified:int,?handle:string}>
	 *        The handles to be merged. Each entry will be in one of the following shapes:
	 *        [
	 *        	"handles" => string[] - the list of handles to merge
	 *        	"deps" => string[] - the dependencies for the handles
	 *        	"modified" => int - the greatest modified time for the handles
	 *        ]
	 *        or
	 *        [
	 *        	"handle" => string - the handle to enqueue as is
	 *        ]
	 */
	public function getHandles()
	{
		$this->maybeAppendCurrent();
		return $this->handles;
	}

	/**
	 * Starts a new handle group
	 *
	 * @return void
	 */
	public function nextIsNewGroup()
	{
		$this->maybeAppendCurrent();
		$this->current = null;
	}

	/**
	 * Add a handle to the list that should not be processed e.g. an external script
	 *
	 * @param string $handle - the handle to add to the list
	 *
	 * @return void
	 */
	public function addNonMerged($handle)
	{
		$this->nextIsNewGroup();
		$this->handles[] = [
			'handle' => $handle
		];
	}

	/**
	 * Add a handle to the current merge group
	 *
	 * @param string $handle - the handle to be added
	 * @param int $modified - the modified time of the file
	 * @param string[] $dependencies - the dependencies of the handle
	 * @param string|null $media - the media type of the handle (for css e.g. 'all' or 'print')
	 *
	 * @return void
	 */
	public function addToCurrentGroup($handle, $modified, $dependencies, $media)
	{
		if($this->current == null)
		{
			$this->current = $this->getBlankHandleArray($media);
		}
		else if(($this->current["media"] ?? null) != $media)
		{
			$this->maybeAppendCurrent();
			$this->current = $this->getBlankHandleArray($media);
		}

		$this->current["handles"][] = $handle;
		$this->current["deps"] = array_merge($this->current["deps"], $dependencies);
		if($this->current["modified"] < $modified)
		{
			$this->current["modified"] = $modified;
		}
	}

	/**
	 * Appends the current merge group to the list if needed
	 *
	 * @return void
	 */
	private function maybeAppendCurrent()
	{
		if($this->current != null)
		{
			$this->handles[] = $this->current;
		}
	}
	/**
	 * Get a blank array for the handles array
	 *
	 * @param string|null $media - the media entry, will not be included if null
	 *
	 * @return array{modified:int, handles:array, ?media: string}
	 */
	private function getBlankHandleArray($media)
	{
		$array = [
			"modified" => 0,
			"handles" => [],
			"deps" => []
		];
		if(null !== $media)
		{
			$array["media"] = $media;
		}
		return $array;
	}
}
