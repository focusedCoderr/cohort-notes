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

- `<input type="text" name="brand">` --> name attribute is very important --> if you want to send the data of the input field to the backend --> you need name attribute --> the data is sent in key value pair and here the key is "brand" and value will be the data which user enters. --> If you don't give name attribute, the data of that field would not be sent because the key would be missing.

- `<label for="brandname>Enter the name of the brand</label>
<input type="text" name="brand" id="brandname">`

- label is used to define what the input field is used for. its "for" attribute's value is the id of the element for which this label element is used.

- `<input type="text" name="username" value="gaurav">` --> value is used to give default value to an input field. If the user submits the form as it is, this default value will be sent to the backend and if the user changes the value in the input field, the new value is sent. --> It has varied uses like it is used in radio buttons, checkboxes, option in select etc. but the concept is same always. the value is sent to the backend. 

- pattern attribute is sometimes used to restrict the type of data that can be entered in a form field. in the pattern attribute --> type the required regular expression to restrict the data to be entered in the form.

## ✅ Regular Expressions (Regex) for Form Validation

- Regular expressions are patterns used to **define the structure of the input** that we want to allow.
- They are used inside the `pattern` attribute of form fields to **validate user input** before the form is submitted.

---

### 🧩 Common Regex Symbols:

| Symbol     | Meaning                                    | Example           | Meaning of Example                  |
|------------|---------------------------------------------|-------------------|--------------------------------------|
| `^`        | Start of the input                          | `^abc`            | starts with "abc"                    |
| `$`        | End of the input                            | `xyz$`            | ends with "xyz"                      |
| `.`        | Any one character                           | `a.c`             | matches `abc`, `axc`, `a1c`, etc.    |
| `[abc]`    | a or b or c                                 | `[aeiou]`         | matches any one vowel                |
| `[^abc]`   | NOT a or b or c                             | `[^0-9]`          | matches any non-digit                |
| `[0-9]`    | matches any digit                           |                   | same as `\d`                         |
| `{n}`      | exactly n times                             | `[0-9]{4}`        | exactly 4 digits                     |
| `{n,}`     | at least n times                            | `[a-z]{2,}`       | minimum 2 letters                    |
| `{n,m}`    | between n and m times                       | `[0-9]{2,5}`      | 2 to 5 digits                        |
| `|`        | OR                                          | `cat|dog`         | matches "cat" or "dog"              |
| `\`        | Escape a special character                  | `\+`              | matches `+` literally                |

---

### 📌 Examples You Can Use in Forms:

#### ✅ Only 10-digit phone number:
```html
<input type="text" pattern="^[0-9]{10}$">

---

## ✨ More Regex Examples for Forms

These are useful patterns for validating common types of inputs:

---

### ✅ Only Letters (a–z, A–Z)

```html
<input type="text" pattern="[a-zA-Z]+">

- Accepts one or more English letters only.

- Rejects numbers or special characters.

### Letters and Spaces (like a full name)

`<input type="text" pattern="[a-zA-Z\s]+">`
- Accepts John Doe, Alice Smith, etc.

- Useful for names that may include spaces.


### Only Numbers (any number of digits)

<input type="text" pattern="[0-9]+">
- Accepts 123, 56789, etc.

- No letters or symbols allowed.


