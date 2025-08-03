---
category: "[[People]]"
tags:
  - people
  - authors
---
He was one of the main writer @ [criticalthinking.org](https://www.criticalthinking.org/).
He [passed away](https://www.criticalthinking.org/pages/richard-paul-memorial/1231) on August 30, 2015.
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
