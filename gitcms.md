---
version: "1"
website_url: http://nobullshitgrief.com
media_path: ""
ssg_framework: other
frontmatter_format: yaml
sitemap_url: http://nobullshitgrief.com/sitemap.xml
publishing_mode: direct_publish
i18n:
  enabled: true
  locales:
    - en
  default_locale: en
  prefix_default_locale: true
collections:
  - name: the-aftermath-diaries
    git_path: /the-aftermath-diaries/
    file_extension: .md
    filename_pattern: blog-the-aftermath-diaries
    label: THE AFTERMATH DIARIES
    description: >-
      THE AFTERMATH DIARIES: A Blog for the Wild, the Wrecked, and the Still Fucking Standing. This is where grief gets
      loud, truth gets ugly, and survival gets a goddamn attitude.
    collection_type: grouped
    frontmatter_schema:
      - name: Blog Title
        type: text
        label: Blog Title
        description: The blog title.
        required: true
      - name: Published Date
        type: datetime
        label: Published Date
        description: The date the blog is published.
        required: true
      - name: Blog Content
        type: text
        label: Blog Content
        description: The contents of the blog.
        required: true
---

# GitCMS Configuration File

> [!WARNING]
> This file is managed by [GitCMS](https://gitcms.dev).
> Update configuration only from the GitCMS web app.
