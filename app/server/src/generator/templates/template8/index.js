const { stripIndent } = require('common-tags')

function template8({ profile, schools, jobs, skills, projects }) {
  return stripIndent`
    %% The MIT License (MIT)
    %%
    %% Copyright (c) 2015 Daniil Belyakov
    %%
    %% Permission is hereby granted, free of charge, to any person obtaining a copy
    %% of this software and associated documentation files (the "Software"), to deal
    %% in the Software without restriction, including without limitation the rights
    %% to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    %% copies of the Software, and to permit persons to whom the Software is
    %% furnished to do so, subject to the following conditions:
    %%
    %% The above copyright notice and this permission notice shall be included in all
    %% copies or substantial portions of the Software.
    %%
    %% THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    %% IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    %% FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    %% AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    %% LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    %% OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    %% SOFTWARE.

    % The font could be set to Windows-specific Calibri by using the 'calibri' option
    \\documentclass[a4paper]{mcdowellcv}

    % For mathematical symbols
    \\usepackage{amsmath}

    % Set applicant's personal data for header
    \\name{Saad Quadri}
    \\address{Metuchen, NJ \\linebreak (732) 476-8719}
    \\contacts{saad@saadq.com \\linebreak github.com/saadq}

    \\begin{document}

      % Print the header
      \\makeheader

      \\begin{cvsection}{Education}
        \\begin{cvsubsection}{New Brunswick, NJ}{Rutgers University}{Jan 2017}
          \\begin{itemize}
            \\item BA in Computer Science. GPA: 3.0
          \\end{itemize}
        \\end{cvsubsection}
      \\end{cvsection}

      % Print the content
      \\begin{cvsection}{Experience}
        \\begin{cvsubsection}{Software Engineer Intern}{Mozilla}{Jun 2016 -- Aug 2016}
          Mountain View, CA
          \\begin{itemize}
            \\item Broadened search criteria for Firefox’s context menu to include subdomains in password suggestions.
            \\item Refactored disabled-host APIs to use the permission manager for both Firefox and Android’s Fennec.
            \\item Fixed regressions for Firefox Electrolysis and improved dialogs and notification popups.
          \\end{itemize}
        \\end{cvsubsection}

        \\begin{cvsubsection}{Coding Advisor}{Codecademy}{Dec 2015 -- May 2016}
            Manhattan, NY
          \\begin{itemize}
            \\item Created a JavaScript project for Codecademy Pro members now available in the new JS course.
            \\item Taught new coders how to avoid bugs and how to go through the process of fixing existing ones.
            \\item Reviewed general programming topics with students and provided assistance for lessons in Java, HTML, CSS, JavaScript, and Ruby.
          \\end{itemize}
        \\end{cvsubsection}

        \\begin{cvsubsection}{App. Developer Intern}{IEEE}{Jun 2015 -- Nov 2015}
            Piscataway, NJ
          \\begin{itemize}
            \\item Wrote an API that allowed CRUD operations to be used for accessing and manipulating data involving current departments/groups/teams at IEEE.
            \\item Created a UI for admins that used the aforementioned API to automate the process of syncing departments/groups/teams on the site to relevant databases.
            \\item Improved the IEEE Innovate site by using cookies to display tailored web-content.
          \\end{itemize}
        \\end{cvsubsection}

        \\begin{cvsubsection}{Web Developer Intern}{Johnson \\& Johnson}{Jan 2015 -- Jun 2015}
          New Brunswick, NJ
          \\begin{itemize}
            \\item Implemented a user interface for the VS open file switcher (ctrl-tab) and extended it to tool windows.
            \\item Created service to provide gradient across VS and VS add-ins. Optimized service via caching.
          \\end{itemize}
          Programmer Productivity Research Center (Summers 2001, 2002)
          \\begin{itemize}
            \\item Built app to compute similarity of all methods in a code base; reduced time from $O(n^2)$ to $O(n\\ log\\ n)$.
            \\item Created test case generation tool which creates random XML docs from XML Schema.
          \\end{itemize}
        \\end{cvsubsection}
      \\end{cvsection}

      \\begin{cvsection}{Projects}
        \\begin{cvsubsection}{}{}{}
              \\begin{itemize}
                \\item \\textbf{Resume Generator} (https://latexresu.me). A webapp for generating LaTeX resumes from form data (including this one).  Node.js, Koa, React, Redux
                \\item \\textbf{Flow Timer} (https://flowtimer.com). A modern speedcubing app with a scrambler, timer, and analyzer for cubing statistics.  Node.js, Koa, React, Redux
                \\item \\textbf{Reddit Image Scraper} (github.com/saadq/reddit-scraper).  A web app that lets you view a collage of images/videos from a subreddit. Ruby, Sinatra
          \\end{itemize}
          \\end{cvsubsection}
      \\end{cvsection}

      \\begin{cvsection}{Skills}
        \\begin{cvsubsection}{}{}{}
          \\begin{itemize}
            \\item Languages: C++; C; Java; Objective-C; C\\#.NET; SQL; JavaScript; XSLT; XML (XSD) Schema
            \\item Frameworks: Visual Studio; Microsoft SQL Server; Eclipse; XCode; Interface Builder
          \\end{itemize}
        \\end{cvsubsection}
      \\end{cvsection}

    \\end{document}
  `
}

module.exports = template8