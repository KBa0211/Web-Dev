x = input().strip()
rev = ""
for i in reversed(x):
    rev += i
print(int(rev))