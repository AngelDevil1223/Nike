cls
echo " "
cd tmp
get-content *.txt | %{$_ -replace "<br>","`n"} > ../data.txt
rm *.txt