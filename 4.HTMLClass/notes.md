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
