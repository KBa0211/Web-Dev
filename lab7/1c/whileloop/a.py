n = int(input())
for i in range (1, n+1):
    while(i**2 <= n):
        print(i**2, end = ' ')
        break