---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/CV.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  - block: collection
    id: publications
    content:
      title: Publications
      text: ""
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      view: citation
  



  # - block: collection
  #   id: teaching_exp
  #   content:
  #     title: Teaching Experience
  #     # Date format for experience
  #     #   Refer to https://wowchemy.com/docs/customization/#date-format
  #     date_format: Jan 2006
  #     # Experiences.
  #     #   Add/remove as many `experience` items below as you like.
  #     #   Required fields are `title`, `company`, and `date_start`.
  #     #   Leave `date_end` empty if it's your current employer.
  #     #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
  #     items:
  #       - title: Lecturer - 101-0467-01L Transport Systems
  #         company: Institute for Transport Planning and Systems
  #         company_url: ''
  #         company_logo: org-eth
  #         location: ''
  #         date_start: '2024-09-01'
  #         date_end: '2025-02-15'
  #         description: In charge of giving lectures and preparing and correcting exams

  #       - title: Teaching assistant - 101-0467-01L Transport Systems
  #         company: Institute for Transport Planning and Systems
  #         company_url: ''
  #         company_logo: org-eth
  #         location: ''
  #         date_start: '2023-09-20'
  #         date_end: '2024-02-15'
  #         description: Assignment and exam presentation and correction

  #       - title: Teaching assistant - 101-0427-01L Public Transport Design and Operations
  #         company: Institute for Transport Planning and Systems
  #         company_url: ''
  #         company_logo: org-eth
  #         location: ''
  #         date_start: '2023-09-20'
  #         date_end: '2025-02-15'
  #         description: Assistance in exercise and assignments sessions

  #       - title: Main lecturer - 42380 Supply Chain Analytics
  #         company: DTU Management
  #         company_url: ''
  #         company_logo: org-dtu
  #         location: ''
  #         date_start: '2023-02-01'
  #         date_end: '2023-05-31'
  #         description: In charge of giving lectures, managing and correcting assignments and exercises for 150+ students 

  #       - title: Teaching Assistant - 42137 Optimization using metaheuristics
  #         company: DTU Management
  #         company_url: ''
  #         company_logo: org-dtu
  #         location: ''
  #         date_start: '2021-01-25'
  #         date_end: '2021-05-25'
  #         description: Supervised and assisted students during exercise lectures

  #       - title: Lecturer - 42117 Transport Optimization 
  #         company: DTU Management
  #         company_url: ''
  #         company_logo: org-dtu
  #         location: ''
  #         date_start: '2020-11-25'
  #         date_end: '2020-11-25'
  #         description: Gave a lecture in optimization in maritime logistics

  #       - title: Teaching Assistant - 42136 Large Scale Optimization using Decomposition
  #         company: DTU Management
  #         company_url: ''
  #         company_logo: org-dtu
  #         location: ''
  #         date_start: '2018-01-25'
  #         date_end: '2018-05-25'
  #         description: Supervised and assisted students during exercise lectures
        
  #       - title: Teaching Assistant - 42101 Introduction to Management Science
  #         company: DTU Management
  #         company_url: ''
  #         company_logo: org-dtu
  #         location: ''
  #         date_start: '2017-08-25'
  #         date_end: '2017-12-25'
  #         description: Supervised and assisted students during exercise lectures

    # design:
    #   columns: '2'


  # - block: markdown
  #   content:
  #     title: '📚 My Research'
  #     subtitle: ''
  #     text: |-
  #       Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

  #       I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
        
  #       Please reach out to collaborate 😃
  #   design:
  #     columns: '1'
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2

  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     view: article-grid
  #     columns: 1
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ''
  #     text: ''
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: date-title-summary
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  # - block: cta-card
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!
        
  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: "bg-primary-700"
  #       css_style: ""

  # - block: accomplishments
  #   content:
  #     # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
  #     title: 'Awards \& Scholarships'
  #     subtitle:
  #     date_format: Jan 2006
  #     items:
  #       - certificate_url: https://www.ivt.ethz.ch/en/info/news/2025/06/verolog-doctoral-dissertation-prize.html
  #         date_end: ''
  #         date_start: '2025-06-17'
  #         description: The prize distinguishes an outstanding PhD thesis on Operational Research methods applied to Vehicle Routing and Logistics Optimization.
  #         organization: 9th meeting - EURO working group on Vehicle Routing and Logistics optimization (VeRoLog) in Trento, Italy
  #         organization_url: https://verolog.euro-online.org/
  #         title: 'VeRoLog Doctoral Dissertation Prize 2023'
  #         url: ''
  #       - certificate_url: https://upcommons.upc.edu/handle/2117/331428
  #         date_end: ''
  #         date_start: '2018-10-18'
  #         description: Awarded by *Accenture* to the student with the best academic record of the year.
  #         organization: ETSEIB, UPC-BarcelonaTech
  #         organization_url: https://etseib.upc.edu/en
  #         title: 'Best academic record in the MSc in Industrial Engineering specialized in Management'
  #         url: ''
  #       - certificate_url: 
  #         date_end: ''
  #         date_start: '2022-01-01'
  #         description: Funds of approximately 4,500 USD to cover expenses of a research stay at MIT
  #         organization: StiboFonden
  #         organization_url: https://stibofonden.dk/
  #         title: Scholarship for a research stay abroad
  #         url: 
  #       - certificate_url: 
  #         date_end: ''
  #         date_start: '2022-01-01'
  #         description: Funds of approximately 3,000 USD to cover expenses of a research stay at MIT
  #         organization: Otto Mønsteds Foundation
  #         organization_url: https://omfonden.dk/
  #         title: Scholarship for a research stay abroad
  #         url:
  #       - certificate_url: 
  #         date_end: ''
  #         date_start: '2022-06-01'
  #         description: Funds of approximately 1,000 USD to cover the expenses of attending TRISTAN XI
  #         organization: Otto Mønsteds Foundation
  #         organization_url: https://omfonden.dk/
  #         title: Scholarship for attendance to conference abroad
  #         url:
  #       - certificate_url: 
  #         date_end: ''
  #         date_start: '2022-01-01'
  #         description: Funds of approximately 3,000 USD to cover the expenses of a research stay at MIT
  #         organization: Reinholdt W. Jorck and Wife Foundation
  #         organization_url: https://reinholdt-jorcks-fond.dk/
  #         title: Scholarship for a research stay abroad
  #         url:
  #   design:
  #     columns: '2'

  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        Workplace
      # Contact (add or remove contact options as necessary)
      email: bernardo.martin-iradi@ivt.baug.ethz.ch
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      address:
        street: Stefano-Franscini-Platz 5
        city: Zurich
        # region: CA
        postcode: '8046'
        country: Switzerland
        country_code: CH
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/Twitter'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: 'skype:echo123?call'
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'
---
