// uprava prvniho radku pro test, a zmena
var ukladani; 
const board = document.getElementById("game-board");
const jabkotext = document.getElementById("jabko");
var jabko = 0;
jabkotext.innerText="Jablicka Jona Porka "+ jabko;
const rows = 10;
const cols = 10;
const circle = document.createElement("div");
circle.classList.add("circle");
var x_npc = 9;
var y_npc = 9;  
const npc = document.createElement("div");
npc.classList.add("npc");

// Initialize a 10x10 array with consecutive numbers
const numRows = 10;
const numCols = 10;

game_board1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 1, 0, 1, 1, 0, 1],
[0, 0, 0, 0, 2, 0, 0, 0, 0, 1],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 2, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 2, 0, 1, 1, 0, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 1, 0]];

game_board2 = [[0, 0, 0, 1, 1, 0, 0, 0, 0, 2],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 2, 0, 1, 1, 0, 1],
[0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, , 0, 1, 1, 0, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 2, 0, 1, 0]];

game_board3 = [[0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
[0, 1, 2, 1, 0, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 0, 2, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
[0, 2, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 0, 1, 1, 1, 0]];

game_board4 = [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
[1, 1, 0, 0, 2, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
[0, 1, 0, 1, 0, 0, 0, 2, 0, 0],
[0, 1, 0, 0, 1, 0, 1, 0, 1, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 1, 1, 0, 2, 0, 1, 1, 0, 0],
[0,1 , 0, 1, 0, 0, 0, 1, 0, 0]];

game_board5 = [[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 1, 0, 0, 2, 0, 0, 0, 1, 0],
[0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0, 1, 0, 2],
[0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
[0, 2, 0, 1, 0, 0, 0, 1, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
[0, 1, 0, 0, 0, 1, 0, 0, 0, 0]];

game_board6 = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
[0, 1, 0, 0, 0, 2, 0, 1, 0, 0],
[0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
[0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
[0, 0, 0, 2, 0, 0, 0, 0, 1, 0],
[0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 0, 2, 0, 1, 0],
[0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 0]];


var gbpole=[game_board1,game_board2,game_board3,game_board4,game_board5,game_board6];
var indexgbp=0;
game_board=gbpole[indexgbp];
// Initialize the circle's position
let x = 0;
let y = 0;

// Create the game board
function createBoard() {
    //TODO: Dodělej funkci na vytvoření herní mapy
    for (let radek = 0; radek < game_board.length; radek++) {
  const radek_tabulky = document.createElement("tr"); // Vytvoříme nový řádek tabulky

  for (let sloupec = 0; sloupec < game_board.length; sloupec++) {
    const bunka_tabulky = document.createElement("td"); // Vytvoříme novou buňku tabulky

    radek_tabulky.appendChild(bunka_tabulky); // Přidáme novou buňku do řádku tabulky

    if (game_board[radek][sloupec] == 1) {
      // Pokud se na této pozici nachází překážka

      const square = document.createElement("div"); // Vytvoříme element div, který slouží jako zábrana

      square.classList.add("square"); // Přidáme divu třídu pro pozdější nastavení jeho vlastností

      bunka_tabulky.appendChild(square); // Přidáme div do buňky tabulky
    }
     if (game_board[radek][sloupec] == 2) {
      // Pokud se na této pozici nachází překážka

      const coin = document.createElement("div"); // Vytvoříme element div, který slouží jako zábrana

      coin.classList.add("coin"); // Přidáme divu třídu pro pozdější nastavení jeho vlastností

      bunka_tabulky.appendChild(coin); // Přidáme div do buňky tabulky
    }
  }
  board.appendChild(radek_tabulky); // přidáme celý řádek do tabulky
}
board.rows[y_npc].cells[x_npc].appendChild(npc);
}

createBoard();

// Add the circle to the starting position
board.rows[y].cells[x].appendChild(circle);

// Function to move the circle
function moveCircle(event) {
    // Remove the circle from the current position

    let newX = x;
    let newY = y;

    console.log(event);

    if(y_npc == y && x_npc == x) {
    window.location.replace("./indexpro.html");
    }

    switch (event.key) {
        case "ArrowUp":
            if (y > 0) {
                newY = y - 1;
            }
            break;
        case "ArrowDown":
            if (y < rows - 1) {
                newY = y + 1;
            }
            break;
        case "ArrowLeft":
            if (x > 0) {
                newX = x - 1;
            }
            break;
        case "ArrowRight":
            if (x < cols - 1) {
                newX = x + 1;
            }
            break;
    }

    // Update the circle's position only if it's a valid move
    if (!board.rows[newY].cells[newX].querySelector('.square')) {
        x = newX;
        y = newY;
    }

    if (game_board[newY][newX] == 2)
    {
        jabko = jabko +1;
        game_board[newY][newX] = 0;
        board.rows[newY].cells[newX].querySelector(".coin").remove(); 
        jabkotext.innerText="Jablicka Jona Porka "+ jabko;
        board.rows[y].cells[x].appendChild(circle);
    if (jabko %3 == 0){
      //window.location.replace("./indexwin.html");
      indexgbp+=1;
      game_board=gbpole[indexgbp];
      while(board.lastElementChild)
      {
        board.removeChild(board.lastElementChild);
      }
      x=0
      y=0
      x_npc=9
      y_npc=9
      createBoard();
    }
    }
    // Add the circle to the new position
        board.rows[y].cells[x].appendChild(circle);

     
  

}

// Listen for keyboard events
document.addEventListener("keydown", moveCircle);

function shortestPathSearch(game_board, y_npc, x_npc, yp, xp) {
  const numRows = game_board.length;
  const numCols = game_board[0].length;

  // Define movement directions (up, down, left, right)
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // Create a 2D array to mark visited cells and store parent cells
  const visited = Array(numRows)
    .fill(false)
    .map(() => Array(numCols).fill(false));
  const parent = Array(numRows)
    .fill(null)
    .map(() => Array(numCols).fill(null));

  // Create a queue for BFS
  const queue = [];

  // Push the NPC's position into the queue
  queue.push([y_npc, x_npc]);
  visited[y_npc][x_npc] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    if (x === yp && y === xp) {
      // Found the player's position, reconstruct the path
      const path = [];
      let curX = yp;
      let curY = xp;
      while (curX !== y_npc || curY !== x_npc) {
        path.push([curX, curY]);
        const [prevX, prevY] = parent[curX][curY];
        curX = prevX;
        curY = prevY;
      }
      path.push([y_npc, x_npc]);
      path.reverse(); // Reverse the path to start from player's position
      return path;
    }

    // Explore adjacent cells
    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols && game_board[newX][newY] === 0 && !visited[newX][newY]) {
        queue.push([newX, newY]);
        visited[newX][newY] = true;
        parent[newX][newY] = [x, y];
      }
    }
  }

  // If no path is found, return an empty array
  return [];
}
// posledni radek
function posunNPC() {
  // dopiště vlastní logiku
  
  ukladani = shortestPathSearch(game_board,y_npc,x_npc,y,x);
  y_npc = ukladani[1][0];
  x_npc = ukladani[1][1];

board.rows[y_npc].cells[x_npc].appendChild(npc);

if(y_npc == y && x_npc == x) {
    window.location.replace("./indexpro.html");
}}
setInterval(posunNPC, 350); // spouštěno každou sekundu
