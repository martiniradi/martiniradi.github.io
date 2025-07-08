---
title: 'Solving Integrated Periodic Railway Timetabling with Satisfiability
Modulo Theories: A Scalable Approach to Routing and Vehicle Circulation'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - Florian Fuchs
  - admin
  - Francesco Corman

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2025-05-20T00:00:00Z'
# doi: 'https://doi.org/10.1016/j.ejor.2021.04.041'

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['article']

# Publication name and optional abbreviated publication name.
publication: Under review in *European Journal of Operational Research*
# publication_short: In *EJOR*

abstract: This paper introduces a novel approach for jointly solving the periodic Train Timetabling Problem (TTP), train routing, and Vehicle Circulation Problem (VCP) through a unified optimization model. While these planning stages are traditionally addressed sequentially, their interdependencies often lead to suboptimal vehicle usage. We propose the VCR-PESP, an integrated formulation that minimizes fleet size while ensuring feasible and infrastructurecompliant periodic timetables. We present the first Satisfiability Modulo Theories (SMT)-based method for the VCR-PESP to solve the resulting large-scale instances. Unlike the Boolean Satisfiability Problem (SAT), which requires time discretisation, SMT supports continuous time via difference constraints, eliminating the trade-off between temporal precision and encoding size. Our approach avoids rounding artifacts and scales effectively, outperforming both SAT and Mixed Integer Program (MIP) models across non-trivial instances. Using real-world data from the Swiss narrow-gauge operator RhB, we conduct extensive experiments to assess the impact of time discretisation, vehicle circulation strategies, route flexibility, and planning integration. We show that discrete models inflate vehicle requirements and that fully integrated solutions substantially reduce fleet needs compared to sequential approaches. Our framework consistently delivers high-resolution solutions with tractable runtimes, even in large and complex networks. By combining modeling accuracy with scalable solver technology, this work establishes SMT as a powerful tool for integrated railway planning. It demonstrates how relaxing discretisation and solving across planning layers enables the creation of more efficient and implementable timetables.

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
