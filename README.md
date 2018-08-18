Mastodon-Activity-Embed
===

![Screenshot](https://i.imgur.com/cVO0SRy.png)

Easy to display activities of your own instance.

## How to Use
- **It needs Mastodon v2.1.2 or later, and `Publish aggregate statistics about user activity` must be enabled. (Please check administration panel.)**

```html
<iframe src="https://eai04191.github.io/Mastodon-Activity-Embed/embed.html?domain=YOUR-INSTANCE-DOMAIN&showDomain=1" frameborder="0" scrolling="no"></iframe>
</div>
</div>
</div>

<style>
    .rich-formatting {
        line-height: 0;
        padding-right: 0;
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
<div class="rich-formatting" style="line-height: 30px; padding-right: 10px;">
```
Please add this snippet to the beginning of a __Custom extended information__.

And replace `YOUR-INSTANCE-DOMAIN` and choose `showDomain` option.

If you set `showDomain=1` shows your instance domain. `0` is none.

![Screenshot](https://i.imgur.com/eUoRU4J.png)

If you want to run this on your own server, you can download to use it.
