cls
@echo OFF
title NIKE BOT
echo                                 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
echo                                      --- @@@ NIKE BOT @@@---
echo                                 //////////////////////////////////////////////////////////
                                            echo                                                                                      
                                                            
echo Starting the Bot...
:repeat
for /l %%x in (1, 1, 3) do (
 start chrome https://www.nike.com/register --user-data-dir=%cd%\container\c%%x
)
set /p cho="Do you want to continue: "
if %cho% == y goto repeat
if %cho% == Y goto repeat
pause
