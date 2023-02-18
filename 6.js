var crownHeight = 6;
var boleHeight = 2;
var boleWidth = 3;
var spaceCount;

for (var i = 1; i <= crownHeight; i++) {
  spaceCount = Math.floor(crownHeight) - i;
  console.log(" ".repeat(spaceCount) + "*".repeat(i * 2 - 1));
}
spaceCount = Math.floor((crownHeight * 2 - 1 - boleWidth) / 2);
for (var i = 1; i <= boleHeight; i++) {
  console.log(" ".repeat(spaceCount) + "*".repeat(boleWidth));
}