import requests as RS
from bs4 import BeautifulSoup as BS

url = "http://www.iciba.com/"
word = input("Please input what you want:")
while(word != "END"):
	try:
		page = RS.get(url+word)
		con = page.content
		soup = BS(con,"lxml")
		key = soup.find("h1",class_="keyword")
		print("*"*20)
		print(key.contents[0][20:])

		lst = soup.find_all("li",class_="clearfix")
		if len(lst) == 1:
			ans = lst
		else:
			ans = lst[:-1]

		for tag in ans:
			for item in tag.contents:
				if item.name == "span":
					print(item.contents[0])
				elif item.name == "p":
					for i in item.contents:
						if i != "\n":
							print(i.contents[0])
		print("*"*20)
	
	except AttributeError as e:
		print(e)
	except Exception:
		print("Something Wrong")	

	word = input("Please input what you want:")	

print("Bye-bye")