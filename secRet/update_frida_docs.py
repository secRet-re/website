import requests


r = requests.get('https://raw.githubusercontent.com/frida/frida-website/master/_i18n/en/_docs/javascript-api.md').text
top = '''---
id: frida
title: Frida
sidebar_label: Frida
---
\n'''
pr = []
remove_block = False
for line in r.split('\n'):
    if line == '## Table of contents':
        remove_block = True
        continue

    if remove_block:
        if line == '## Global':
            remove_block = False
        else:
            continue

    if line == '{% highlight js %}':
        line = '```javascript'
    elif line == '{% highlight sh %}':
        line = '```shell script'
    elif line == '{% highlight py %}':
        line = '```python'
    elif line == '{% endhighlight %}':
        line = '```'
    pr.append(line)
top += '\n'.join(pr)
with open('docs/frida.md', 'w') as f:
    f.write(top)
