binary_number = input()  
decimal_number = 0  

for digit in binary_number:
    decimal_number = decimal_number * 2 + int(digit)  

print(decimal_number)  
