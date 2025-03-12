---
title: Markdown page example
---

export const emptyJson = JSON.stringify({})

# Markdown page example

You don't need React to write simple standalone pages.

<Toggle variableKey="new-maintenance-flag" defaultValue={false} comparison={false}>
  <div className="banner">
    Hello, I am a simple standalone page.
  </div>
</Toggle>

<p>
  <StringFlag variableKey="site-heading" defaultValue="" />
</p>
<p>
  <NumberFlag variableKey="team-number" defaultValue="0" />
</p>
<p>
  <JsonFlag variableKey="team-info" defaultValue={JSON.stringify({})} />
</p>
