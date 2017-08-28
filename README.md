# Searchlist.org
This is the frontend html code for what is/will become `searchlist.org`, a website build by Dan Cash and Cliff Shull for the purpose of learning and building a completely serverless website.  Also it will search/return links to Craigslist searches from all CL sites within a specified distance of a starting city.

## searchlist_s3_frontend
This specific project on github is the frontend HTML/CSS/JS code that lives in a AWS S3 bucket and runs as a static website.  It reaches out via API Gateway to trigger Lambda code that calculates a list of CL sites within the specified distance and uses [Pusher](https:/pusher.com) to push the resulting cities back to the static webpage.  Eventually it will also trigger Lambda code to run a CL search for each returned city.
