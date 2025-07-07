---
title: 'A Double Decomposition Algorithm for Network Planning and Operations in Deviated Fixed-route Microtransit'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Alexandria Schmid
  - Kayla Cummings
  - Alexandre Jacquillat

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2025-06-04T00:00:00Z'
#doi: 'https://doi.org/10.1016/j.ejor.2021.04.041'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: Major revision in *Operations Research*
# publication_short: In *EJOR*

abstract: Microtransit offers opportunities to enhance urban mobility by combining the reliability of public transit and the flexibility of ride-sharing. This paper optimizes the design and operations of a deviated fixed-route microtransit system that relies on reference lines but is allowed to deviate in response to passenger requests. We formulate a Microtransit Network Design (MiND) model via two-stage stochastic integer optimization, with a first-stage network design and service scheduling structure and a second-stage vehicle routing structure. We derive a tight second-stage relaxation using a subpath-based representation of microtransit operations in a load-expanded network. We develop a double-decomposition algorithm combining Benders decomposition and subpath-based column generation. We prove that the algorithm maintains a valid optimality gap and converges to an optimal solution in a finite number of iterations. Results obtained with real-world data from Manhattan show that the methodology scales to large and otherwise-intractable instances, with up to 10-100 candidate lines and hundreds of stops. Comparisons with transit and ride-sharing suggest that microtransit can provide win-win outcomes toward efficient mobility (high demand coverage, low costs, high level of service), equitable mobility (broad geographic reach) and sustainable mobility (limited environmental footprint). We provide an open-source implementation to enable replication.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
# - Source Themes
# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: 'Image credit: [**Pexels**](https://www.pexels.com/photo/timelapse-photography-of-city-1494582/)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []
  # - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: #example
---
