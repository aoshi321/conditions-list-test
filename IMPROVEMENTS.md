# Improvements and decisions made

Currently I'm loading the entire list in one go. This could be improved to either use pagination or to dynamically
load more content as you scroll the browser window.

Responsive images could be added to improve load time. currently I have the one image with dynamic dimension's which I think is fine for the purpose of this test.

Due to the fact most of the images would take a long time to return a response, more logic was added to the 'useFallbackImg' hook to cater for this. The logic could be def be made cleaner.

Abstracting out the view from the 'App.js' container would have easily
allowed me to test the loading view functionality branch logic. Something I would have looked to have done with more time.

Adding a unique identifier to each condition type in the json would make it to easy then provide a detailed view page
for each condition for future extension.

Due to time constraints did not provide a nicer error view.
