Mastodon-Activity-Embed
===

![Screenshot](https://i.imgur.com/cVO0SRy.png)

Easy to display activities of your own instance.

## How to use
- **It needs Mastodon v2.1.2 or later, and `Publish aggregate statistics about user activity` must be enabled. (Please check administration panel.)**

```html
<iframe src="https://eai04191.github.io/Mastodon-Activity-Embed/embed.html?YOUR-INSTANCE-DOMAIN" frameborder="0" scrolling="no"></iframe>
</div>
</div>
</div>

<style>
    .rich-formatting {
        line-height: 30px;
        padding-right: 10px;
    }

    iframe {
        width: 100%;
        height: 164px;
    }

    .column-4 {
        grid-column: 1/3;
        grid-row: 4;
    }
</style>

<div class="column-4">
    <div class="box-widget">
        <div class="rich-formatting" style="line-height: 30px;">
```
Please add this snippet to the beginning of a __Custom extended information__.

![image](https://user-images.githubusercontent.com/14953122/38171107-b18932aa-35cd-11e8-9268-8317d9970ada.png)

If you want to run this on your own server, you can download to use it.
