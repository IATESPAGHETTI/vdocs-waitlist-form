1. Clone the Repository:
- Run the following command in your terminal:
  git clone https://github.com/IATESPAGHETTI/vdocs-waitlist-form.git

2. Run Locally:
- Open the index.html file in your web browser.
- Press F12 to open Developer Tools (Console and Network tabs).
- Fill in the form and click Submit.

3. Check Locally Stored Data:
- In the Console tab, paste this command and press Enter:
  console.log(JSON.parse(localStorage.getItem('waitlistData')));

4. Inspect Simulated API Request:
- Go to the Network tab in Developer Tools.
- Click Submit on the form.
- A new entry named 'users' will appear under the Name column.
- Click on it to view request details and payload.
