# PRD- Project Requirement Document

## Objective or Purpose

- Objective of making this product
- for example: for a juice shop website - my objective is to create a basic html website for the shop. Take this offline shop to online

## Scope

- we have to define what is in the scope and what's not
- for example: Basic skeleton with card and contact details of the juice shop is in scope
- no payment system integration is in the scope in this version

## Features and Requirements

### P1

- P1 features are not optional. we have to give these features in this version.
- for example - pictures of juice
- price of juice

### P2

- not compulsory to have them. good to have but not compulsory
- for example - pay with bitcoin at juice shop

## User Stories or Use Cases

- what are the user requirements that we have to make this project
- for example: A user says I want the website to get the price list of juices while sitting at home
- I want to order juice while sitting at home

## Technical Requirements

- HTML

## Design Requirement

- color scheme of the website
- design of the website

## Timeline

- how much time required to make this project?

# HTML - Hypertext Markup Language

- ! + tab -> boilerplate
- `<html lang="en">` --> lang is an atttribute
- h1>lorem4 + tab --> 4 random words in h1
- difference b/w tags and element --> tags are opening tags and closing tags
- element --> opening tag plus content plus closing tag
- self closing tag --> `<br>` --> line break, `<hr>` --> horizontal rule, `<img src="" alt="" >`
- `<meta charset="utf-8">` --> ensure the text is readable and works across languages and devices. utf-8 character set is used to render characters on the webpage
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` --> viewport is the visible area of a web-page on a screen. Earlier websites used to load in zoom out condition in mobile browsers and text appeared to be small. So, this was introduced to rectify this problem.
- viewport setting is targeted using this meta tag and then width in which the content is to be loaded is set to device width. Initial scale is set to be 1.0 so that the website doesn't look zoomed out.
- `<strong></strong>` or `<b></b>` --> bold
- `<i></i>`or `<em></em>` --> italic
- `<u></u>` --> underline
- `<small></small>` --> makes text smaller
- `<ul><li></li></ul>` --> unordered list
- `<ol><li></li></ol>` --> ordered list
- `<dl><dt></dt><dd></dd></dl>` --> description list
- dl --> container,
  dt --> description term,
  dd --> description detail
- `<a href="www.google.com" target="_blank">` --> target blank opens the link in a new tab
- To link to a section on the same page --> Give that section an id. for example: 'id1' --> write a tag with href="#id1". This will link a tag to the section having id --> "id1"
- To download a file --> write path to file in href and add a download attribute. for example:
  `<a href="./abc.png" download>Click me to download this file</a>`
- To send an email using href `<a href="mailto:gyadav187@gmail.com">Send Email</a>` --> will open email client to send email to gyadav187@gmail.com
- Similarly to open dialer on phone to call a number --> `<a href = "tel:+919999999999"></a> `
- title attribute --> shows extra info on hover (tooltip)
  used like: `<a title="...">` or `<img title="...">`
  for user help, not styling
  optional

- `<link rel="" href="">` --> link is empty tag --> only contains attributes --> rel can be stylesheet, favicon etc.
- `<img src="./free-nature-images.jpg" alt="nature image" title="title of the image. hover mouse over the image to see this text" width="400px">` --> src--> location of the image | alt--> alternate text that will appear on the screen if image is not loaded | title --> read the attribute

- for making table --> `<table>  <tr> <th or td>DATA</th or td>  </tr>  </table>`
- table tag is the container
- tr starts a row
- th --> used for column heading or row heading --> it is table header cell
- td --> it is also data cell but...used for regular data

- colspan attribute --> used for merging cells horizontally --> only can be used in td or th
- rowspan attribute --> used for merging cells vertically --> only can be used in td or th

- eg. : `<th colspan="2">` for merging two cells horizontally and `<th rowspan="3">` --> for merging 3 cells vertically

- some basics to know about form:
- `<form></form>` tag is the container
- `<form action="/submit" method="POST"></form>` --> action attribute is used for defining the url of the backend where the form data will be processed
- method is used to define the method through which the form will be sent for processing
- GET --> appends data in url. --> less safe --> data visible to attackers
- POST --> puts data in the request --> safer than GET

- 'required' attribute is used if a particular input field is compulsory to be filled

- `<input type="text" name="brand">` --> name attribute is very important --> if you want to send the data of the input field to the backend --> you need name attribute --> the data is sent in key value pair and here the key is "brand" and value will be the data which user enters. --> If you don't give name attribute, the data of that field would not be sent because the key would be missing.

- `<label for="brandname">Enter the name of the brand</label>
<input type="text" name="brand" id="brandname">`

- label is used to define what the input field is used for. its "for" attribute's value is the id of the element for which this label element is used.

- `<input type="text" name="username" value="gaurav">` --> value is used to give default value to an input field. If the user submits the form as it is, this default value will be sent to the backend and if the user changes the value in the input field, the new value is sent. --> It has varied uses like it is used in radio buttons, checkboxes, option in select etc. but the concept is same always. the value is sent to the backend.

---

- `<input type="date">`  
  → used to pick a date from a calendar

- Gives a date picker UI in supported browsers

- Stores value in YYYY-MM-DD format (like 2000-08-05)

- Can set:

- min → minimum date
- max → maximum date
- required → must be filled

- Used for: DOB, booking dates, deadlines

---

- `<input type="color">` --> opens a color picker where you can choose any color

- Used to collect a user’s favorite color or theme preferences

- Default value: #000000 (black)

- Returns value in hex format (#RRGGBB)

---

- `<input type="submit">` --> Submits the key value pair of the form input elements to the server which was defined in the `action` attribute of the `form` element.
- If no `action` attribute is defined, it sends the data to the current url
- The `method` attribute of the form (`GET` or `POST`) determines how the data is sent.

---

```js
<form>
	<button type="button">Do Something</button>
</form>
```

- If `type` attribute is not defined when the button is in the form element, then default `type` is submit and clicking the button will activate the `action` attribute
- So, if you want to add some functionality to the button, you should mention `type=button` so that it does not trigger the `action` attribute of the form

---

- pattern attribute is sometimes used to restrict the type of data that can be entered in a form field. in the pattern attribute --> type the required regular expression to restrict the data to be entered in the form.

## Regular Expressions (Regex) for Form Validation

- Regular expressions are patterns used to **define the structure of the input** that we want to allow.
- They are used inside the `pattern` attribute of form fields to **validate user input** before the form is submitted.

---

### Common Regex Symbols:

| Symbol   | Meaning                    | Example      | Meaning of Example                |
| -------- | -------------------------- | ------------ | --------------------------------- | ---- | ---------------------- |
| `^`      | Start of the input         | `^abc`       | starts with "abc"                 |
| `$`      | End of the input           | `xyz$`       | ends with "xyz"                   |
| `.`      | Any one character          | `a.c`        | matches `abc`, `axc`, `a1c`, etc. |
| `[abc]`  | a or b or c                | `[aeiou]`    | matches any one vowel             |
| `[^abc]` | NOT a or b or c            | `[^0-9]`     | matches any non-digit             |
| `[0-9]`  | matches any digit          |              | same as `\d`                      |
| `{n}`    | exactly n times            | `[0-9]{4}`   | exactly 4 digits                  |
| `{n,}`   | at least n times           | `[a-z]{2,}`  | minimum 2 letters                 |
| `{n,m}`  | between n and m times      | `[0-9]{2,5}` | 2 to 5 digits                     |
| `        | `                          | OR           | `cat                              | dog` | matches "cat" or "dog" |
| `\`      | Escape a special character | `\+`         | matches `+` literally             |

---

### Examples You Can Use in Forms:

#### Only 10-digit phone number:

````html
<input type="text" pattern="^[0-9]{10}$" />

--- ## ✨ More Regex Examples for Forms These are useful patterns for validating
common types of inputs: --- ### ✅ Only Letters (a–z, A–Z) ```html
<input type="text" pattern="[a-zA-Z]+" />

- Accepts one or more English letters only. - Rejects numbers or special
characters. ### Letters and Spaces (like a full name) `<input
	type="text"
	pattern="[a-zA-Z\s]+"
/>` - Accepts John Doe, Alice Smith, etc. - Useful for names that may include
spaces. ### Only Numbers (any number of digits)

<input type="text" pattern="[0-9]+" />
- Accepts 123, 56789, etc. - No letters or symbols allowed.
````

---

- `<header></header>` --> semantic element --> used to define the introductory portion of the webpage or section.
- it usually consists website title, navigation menu, logo, tagline etc.

- `<nav><ul><li>Home</li><li>About us</li></ul></nav>` --> semantic html5 element --> used to define a section of navigation links --> usually used in menus or table of contents --> wraps the main navigation links

---

- a semantic element tells us what the content is, not how it looks
- `<main>` --> this is a semantic element and used to show what the core content of the website is - the part directly related to the page’s main topic.
- `<section>` --> this is a semantic element and is used to group related content under a single heading. Think of it like a chapter in a book. Common use cases: "Features", "Services", "Testimonials" etc.

- for example: `<section><h2>Our Services</h2><p>We offer web development, design, and SEO optimization.</p></section>`

- `<article>` --> a semantic element --> used for a self-contained content --> example use cases: blog post, news article, forum post, product listing
- for example : `<article><h3>How to Learn HTML</h3><p>Start with the basics, practice building pages, and explore tutorials.</p></article>`

- `<aside>` → semantic element for related or extra content → often used as a sidebar → not part of the main flow but contextually related
- for example: `<aside><h2>Related Links</h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML Documentation</a></li><li><a href="https://www.w3schools.com/html/">W3Schools HTML Tutorial</a></li><li><a href="https://htmlreference.io/">HTML Reference</a></li></ul></aside>`

- `<footer>` → semantic element for the bottom section of a page or section → commonly includes copyright, author info, or contact details
- for example: `<body><!-- header --><!-- main --><!-- aside --><footer><p>&copy; 2025 Gaurav Yadav. All rights reserved.</p></footer></body>`
- `aria-label` -> it is an attribute → gives screen readers a custom label for an element → useful when there's no visible label → improves accessibility
- for example: `<nav aria-label="Main navigation"><ul><li><a href="#">Home</a></li><li><a href="#">Contact Us</a></li><li><a href="#">About Us</a></li></ul></nav>` --> Screen readers will now say something like: “Main navigation, list with 3 items…”

---

- `<video>` --> used to embed video player in a webpage

#### Atrributes used in video tag

- controls --> adds play, pause, volume, fullscreen buttons --> boolean
- autoplay --> video starts playing automatically when the page loads --> boolean
- muted --> required for autoplay to work in most browsers --> boolean
- poster --> sets a placeholder image (like a thumbnail) before video starts
- width / height --> controls the size of the video

- `<track>` --> adds subtitles, captions, chapters, etc. to a video

#### Atrributes used in track tag

- src --> file path to subtitle (usually .vtt)
- kind --> type of track (e.g. subtitles, captions)
- srclang --> language code (e.g. en, fr)
- label --> name shown to user in subtitle menu
- default --> makes this subtitle selected by default --> boolean

---

- .vtt file --> plain text file in WebVTT format used for subtitles

#### How to use video and track elements

- `<video src="" controls autoplay muted><track src="" srclang="" label="" default></track></video>`

- `<audio>` --> used to embed audio content like music or sound effects

- `controls` --> adds play/pause/volume buttons to the player

- `<source>` --> defines audio file and type (multiple sources = better browser support)
  type="audio/mpeg" --> for .mp3 files
  type="audio/ogg" --> for .ogg files

- for example: `<audio controls><source src="audio.mp3" type="audio/mpeg"><source src="audio.ogg" type="audio/ogg">Your browser does not support the audio element.</audio>`

- fallback content --> text between `<audio>` or `<video>` tags → shown only if browser does not support the media tag or format
  not shown if at least one `<source>` is playable

#### How to embed youtube video using iframe

- `<iframe>` --> embeds another webpage inside the current page (e.g. YouTube video player)

- src --> set to "https://www.youtube.com/embed/VIDEO_ID"
- width / height --> size of the video player in pixels
- allowfullscreen --> allows the video to be played in fullscreen
- allow --> allows features like autoplay, clipboard, fullscreen, etc.
- title --> accessibility label for screen readers

- we do NOT have to write the `<iframe>` code manually
- YouTube provides the `<iframe>` code → go to video → click Share → click Embed → copy the code
- for example : `<iframe width="560" height="315" src="https://www.youtube.com/embed/z_k5keq1qKs?si=vIi5Ffsx-USsVDF5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; " referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>` --> this code was provided by youtube.

---

#### data-\* attribute:

- Used to store custom data in HTML
- Syntax: data-key="value"
- Accessible in JavaScript using element.dataset.key
- Key in JS is written in camelCase (e.g. data-user-id → dataset.userId)

- Example:
  `<button data-user-id="101" data-role="moderator">Click Me</button>`

- JS:
  element.dataset.userId → "101"
  element.dataset.role → "moderator"
