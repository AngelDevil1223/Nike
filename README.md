>>> Steps:

Open CMD with admin permission (Run as administrator) and type or copy+paste this command without quotes.

"start chrome --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp"

We need to disable web security for 5SIM API issue. Disable GPU is not mandatory if you are having issues then you can remove the disable gpu argument just go with disable web security and other dir is necessary for this.

After opening the browser, you can simply install the TamperMonkey and copy paste the scripts there.

First of all, manually try to register/login to nike and if everything works fine then enable the plugin and visit nike.com/register.

---------------------------------------------------------------
Workflow: Nike [Register] > Nike [Main] > Nike [Settings(Phone Verification here)] > Nike [Register] > Similarly it'll continue.
----------------------------------------------------------------

You just need to wait on settings page. If the script is not working and there will be no action for more than 2 minutes then there may be some issue otherwise you need to wait sometime.

------------------------------------------------
Phone Verification Workflow
------------------------------------------------
The phone verification script will automatically get the number from 5SIM API and set it to phone number field and click the 'send code' button and if the website shows Generic error then the script will cancel the order and request new number from 5SIM api and click send code again. If the website display no error after clicking 'send code' button then the script will wait sometime like 30sec and then get the sms and confirm the phone verification. If there will be no sms after 30 sec then the script will goto the first phase of requesting new number and it'll continue.

---------------------------
Extra Info:
---------------------------

If you need to change country then simply edit the phone verifier script and in the starting, you can see someting like this.

function changenum(){document.querySelector("select[class='country']").value="MY";
var url = "https://5sim.net/v1/user/buy/activation/malaysia/any/nike";

You need to change 2 things here like this.

[class='country']").value="Changing Here";
var url = "https://5sim.net/v1/user/buy/activation/Changing Here/any/nike";

Example:
[class='country']").value="PK;
var url = "https://5sim.net/v1/user/buy/activation/pakistan/any/nike";

You just need to edit these 2 lines only in the starting.


Thanks!

