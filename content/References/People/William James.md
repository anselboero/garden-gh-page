---
category: "[[People]]"
tags:
  - people
  - authors
---
1842 - 1910.

[Wikipedia page](https://en.wikipedia.org/wiki/William_James).

American philosopher and psychologist.
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
