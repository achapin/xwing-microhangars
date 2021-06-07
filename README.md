# Project Infinite Microhangar
I love the microhangars made by [SirWilli](https://sirwillibald.com/games/x-wing-miniatures-games/microhangars-2-0/), but it seems like he is no longer updating his versions. I've seen a few other folks try to keep up, but no one has emerged as a new best-in class. So I am to change that with my project. 

## The approach
Part of the problem, I think, is that it requires too much manual work for the producer. Thus, my approach is to automate as much as possible. To wit, the setup of an individual ship now only needs to have its stats added to a data file, and then it is immediately printable. I've also set up the page such that you don't need to download a bunch of PDFs, and either waste paper or spend lots of time trying to manually combining existing boxes onto a single sheet. With my generator, you simply add the specific ships you need boxes for, and then depending on your print settings (A4 vs Letter, portrait vs landscape, etc) the generator packs as many ships as possible per page.

## How to use this tool
Select the ships you want microhangars for, specify which faction they'll be for, and then click "Add Ship". That will add the new box to the web page. Once you've chosen all your ships, simply print the page using your brower's print command. The page will strip out all the things not needed for the boxes. I recommend printing on heavy paper, gsm300. Once they're printed, cut along the solid lines, and fold along the dashed lines. put glue on the sections that are grey, and assemble.

## Call for help!
I have most of the ships for X-Wing, but not all of them. Also, taking accurate measurements of my entire collection is rather tedious - especially when making sure that everything comes out perfectly So if others can submit dimensions for the missing ships, that would be a big help. If you want to contribute, please use the Pull Request feature from github [here](https://github.com/achapin/xwing-microhangars/pulls).

If you have any other ideas or suggestions, I'd love to hear them - please submit them [here](https://github.com/achapin/xwing-microhangars/issues). This is a passion project, though, so don't expect results in a timely manner.

# TODOs

These are tasks that I'm planning to work on already - no need to submit them as issues.
* Color icons to represent livery
* Large ships + reinforcement panels
* Allow for custom faction/ship combos
* Allow for custom ship icons

# Thanks and Props:
- [DarkPadawan](https://boardgamegeek.com/filepage/102932/darks-x-wing-micro-hangars-firespray-31-yt-1300) for inspiring SirWilli to make his run of boxes.
- [SirWilli](https://sirwillibald.com) for making the first boxes
- [geordanr](https://github.com/geordanr) for their OG squad builder in 1.0 and the X-Wing miniatues font which this project uses
- [raithos](https://github.com/raithos) for the best 2.0 squad builder and whose code I check when I need to solve problems with this tool.