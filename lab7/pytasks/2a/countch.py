import sys
from collections import Counter

if __name__ == '__main__':
    s = input().strip() 
    freq = Counter(s)
    
    sorted_chars = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    
   
    for char, count in sorted_chars[:3]:
        print(char,count)