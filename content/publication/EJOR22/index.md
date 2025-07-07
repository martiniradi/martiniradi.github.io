---
title: 'A column-generation based matheuristic for periodic and symmetric train timetabling with integrated passenger routing'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Stefan Ropke

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2021-05-02T00:00:00Z'
doi: 'https://doi.org/10.1016/j.ejor.2021.04.041'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article-journal']

# Publication name and optional abbreviated publication name.
publication: In *European Journal of Operational Research*
# publication_short: In *EJOR*

abstract: In this study, the periodic train timetabling problem is formulated using a time-space graph formulation that exploits the properties of a symmetric timetable. Three solution methods are proposed and compared where solutions are built by what we define as a dive-and-cut-and-price procedure. An LP relaxed version of the problem with a subset of constraints is solved using column generation where each column corresponds to the train paths of a line. Violated constraints are added by separation and a heuristic process is applied to help to find integer solutions. The passenger travel time is computed based on a solution timetable and Benders’ optimality cuts are generated allowing the method to integrate the routing of the passengers. We propose two large neighborhood search methods where the solution is iteratively destroyed and repaired into a new one and one random iterative method. The problem is tested on the morning rush hour period of the Regional and InterCity train network of Zealand, Denmark. The solution approaches show robust performance in a variety of scenarios, being able to find good quality solutions in terms of travel time and path length relatively fast. The inclusion of the proposed Benders’ cuts provide stronger relaxations to the problem. In addition, the graph formulation covers different real-life constraints and has the potential to easily be extended to accommodate more constraints.

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
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s1HNMntIv5w)'
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
slides: 
---

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). --!>
