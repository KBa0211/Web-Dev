x = input().strip()
d = input().strip()
cnt = 0
for i in x:
    if i == d:
        cnt += 1
    
print(cnt)