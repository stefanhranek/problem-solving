var numIslands = function (grid) {
  let res = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] === "1") {
        dfs(x, y);
        res++;
      }
    }
  }

  function dfs(x, y) {
    if (grid[y] && grid[y][x] === "1") {
      grid[y][x] = "0";
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    }
  }

  return res;
};


/*


Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/