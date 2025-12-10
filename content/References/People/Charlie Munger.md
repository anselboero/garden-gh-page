---
<<<<<<< HEAD
{"publish":true,"created":"2025-12-09T16:26:22.523+01:00","modified":"2025-12-10T12:46:14.833+01:00","tags":["people","authors"],"cssclasses":""}
=======
category: "[[People]]"
tags:
  - people
  - authors
publish: true
>>>>>>> 6cb927e (merge)
---

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
