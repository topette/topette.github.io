import * as React from "react"

export const TopetteLogo = (props) => (
  <svg
    width={221}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h221v55H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="matrix(.00079 0 0 .00316 0 -.006)" />
      </pattern>
      <image
        id="b"
        width={1270}
        height={320}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPYAAAFACAYAAAA/L/KWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA8tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSI4N0M2MTZGNkEwODdBNzQ0QkFCRkRCNkQ3RjY2ODlCQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMDRGOUI4MzEzRjcxMUVEOTVBRUY3RTBDRTE0M0YzMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMDRGOUI4MjEzRjcxMUVEOTVBRUY3RTBDRTE0M0YzMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBRkQ2QkRGNzgyQkUzMTFCQUE3RDlGQjMyMTQ2NUVGIiBzdFJlZjpkb2N1bWVudElEPSI4N0M2MTZGNkEwODdBNzQ0QkFCRkRC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"
      />
    </defs>
  </svg>
)
