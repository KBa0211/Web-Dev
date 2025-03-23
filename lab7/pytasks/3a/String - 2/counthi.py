def count_hi(s):
    count = 0
    for i in range(len(s) - 1):
        if s[i:i+2] == "hi":
            count += 1
    return count