---
category:
  - "[[People]]"
tags:
  - people
  - directors
created: 2025-02-08
---
## Movies

```dataview
table without id
	file.link as Movie,
	year as Year,
	rating as Rating
where
	contains(category,[[Movies]]) and
	contains(director,this.file.link)
sort rating desc
```