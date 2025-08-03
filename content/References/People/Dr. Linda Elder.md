---
category: "[[People]]"
tags:
  - people
  - authors
---
She is an American education psychologist, author and president of the Foundation for Critical Thinking.
## Books

```dataview
table without id
	file.link as Title,
	year as Year,
	rating as Rating
where
	contains(category,[[Books]])
	and contains(author,this.file.link)
sort rating desc
```

## Articles


```dataview
table without id
	file.link as Title,
	published.year as Year,
	rating as Rating
where
	contains(category,[[Articles]])
	and contains(author,this.file.link)
sort rating desc
```
