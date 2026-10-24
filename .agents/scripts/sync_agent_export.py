"""Regenerate the machine-readable export from its readable source index."""
from html.parser import HTMLParser
from pathlib import Path
import json


class ContentParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.contents = []
        self.current = None

    def handle_starttag(self, tag, attrs):
        if tag == "pre":
            self.current = []

    def handle_data(self, data):
        if self.current is not None:
            self.current.append(data)

    def handle_endtag(self, tag):
        if tag == "pre" and self.current is not None:
            self.contents.append("".join(self.current).strip())
            self.current = None


public = Path("artifacts/e-hannan-design-portfolio/public")
parser = ContentParser()
parser.feed((public / "agents.html").read_text())
target = public / "agents.json"
index = json.loads(target.read_text())
assert len(parser.contents) == len(index["pages"]), "Source-page count mismatch"
for page, content in zip(index["pages"], parser.contents):
    page["content"] = content
target.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n")
print(f"Refreshed {len(parser.contents)} machine-readable page exports.")
