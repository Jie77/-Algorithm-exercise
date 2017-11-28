num = int(input())
listx = input().split()
listy = input().split()
def change(x):
    return int(x)
listx = list(map(change, listx))
listy = list(map(change, listy))
def cul(listx, listy, i):
    return listx[i]-1+listy[i]-1
min = cul(listx, listy, 0)
for i in range(num):
    if min > cul(listx, listy, i):
        min = cul(listx, listy, i)
print(min)


