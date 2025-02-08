---
category:
  - "[[Magazines]]"
tags: []
---
```dataview
table without id
	file.link as "Article Name",
    author as "Author",
    published as "Published At"
where
	contains(category,[[Articles]]) and
	contains(magazine,this.file.link)
```
