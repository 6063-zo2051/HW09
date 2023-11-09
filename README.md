# HW 09

Apologies that this part of my homework is overdue! I had a hard time with it and wanted to deliver a quality submission.

## My Process:
Initially, I had set out to create a maze that had a popup after you successfully found the exit. I imported a maze image from online and tried to get my ball object to move through it, but this was not working out.

I started invetigating the p5play website more and chose to use the library to create a game that reminded me of the pinball machine. However, it was a struggle to get my index to be correct and I had to do a lot of online research to find the setup that worked correctly. Once I got it to work, I began to play around with the features of gravity, friction, and drag.

I created multiple floors one by one and adjusted their rotation. However, I felt that this was too tedious. I decided to create a group for the floors to be able to add as many as I would like in an easy way.

The ball was not moving very fast and the friction was already set to 0. I hard time figuring out why it was moving so slow and not being as slippery as I had wanted it to be. I realized after some time that the gravity needed to be increased significantly.

The hard part is that I want the window to reload when the ball reaches the goal. However, I tried " window.location.reload" and could not get it to work. I also attempted to add an animation for the ball, making it alternate between a smiley and silly face, but I beleive that there is an issue with the frames here since the image may only be loaded for the first frame?