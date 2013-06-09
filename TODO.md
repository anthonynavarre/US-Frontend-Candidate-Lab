# MVP

* Use web font + CSS to make event details selectable in-browser, more
  accessible, and search-engine friendly
* Browser testing

# Nice-to-Haves

* Capture invitee's response
  - Introduce Google Analytics
  - Log RSVP event with GAnalytics on invitee interaction
  - Store session variable to prevent multiple responses + allow change
    of response
  - Design "change your response" interaction
  - Allow invitee to indicate that she will bring a +1
* "Polaroid" animation effect for modal window
  - Include "flash" effect on background
  - Slow fade-in on image, quick fade-in on message
  - Explore using CSS3 filter on image for browsers that support it
  - Use audio tag for camera sound-effect
* Use font-based icons for buying the book & getting directions
* Handle smaller screen sizes with responsive breakpoints
* Do something fancy with background image to make it repeatable without
  bloating file sizes - CSS "Cicada" technique applicable?
* Deliver X-UA-Compatible header server-side instead of within `head`
  tag to satisfy HTML validator
  - see: http://www.validatethis.co.uk/news/fix-bad-value-x-ua-compatible-once-and-for-all/
* Print-specific CSS
* Add apple-touch-icon
* Use CSS gradients to enhance #invitation background texture - need to
  determine whether this is worth the tradeoff of extra markup and
  investment of extra effort

