# Mastodon-Activity-Embed

![Dark Theme Screenshot](https://i.imgur.com/uYNcNwk.png)

Now Support Light theme!!!

![Light Theme Screenshot](https://i.imgur.com/oN69MF8.png)

Easy to display activities of your own instance.

## How to Use

- **It needs Mastodon v2.1.2 or later, and `Publish aggregate statistics about user activity` must be enabled. (Please check administration panel.)**

```html
<div id="activity-embed">
</div>
<script>
    {
        // Config Begin.
        const domain = "YOUR-INSTANCE-DOMAIN";
        const showDomain = false;
        // Config End.
        const activityEmbed = document.getElementById("activity-embed");
        const isLight = document.querySelectorAll(`link[rel="stylesheet"]`)[1].href.match(/light/);
        let theme;
        if (isLight) {
            theme = "light";
        } else {
            theme = "dark";
        }
        const html = `<iframe src="https://eai04191.github.io/Mastodon-Activity-Embed/embed.html?domain=${domain}&showDomain=${Number(showDomain)}&theme=${theme}" frameborder="0" scrolling="no"></iframe>`;
        activityEmbed.innerHTML = html;
    }
</script>
</div>
</div>
</div>

<style>
    .rich-formatting {
        line-height: 0;
        padding-right: 0;
    }

    #activity-embed iframe {
        width: 100%;
        height: 164px;
    }

    .column-fullwidth {
        grid-column: 1/3;
    }
</style>

<div class="column-fullwidth">
<div class="box-widget">
<div class="rich-formatting" style="line-height: 30px;" id="emoji-showcase">

<!-- YOUR CONTETS HERE -->
```

Please add this snippet to the beginning of a **Custom extended information**.

And set `YOUR-INSTANCE-DOMAIN`, and choose `showDomain` option.

If you set `showDomain = true` shows your instance domain. `false` is none.

![Screenshot](https://i.imgur.com/eUoRU4J.png)

If you want to run this on your own server, you can download to use it.
