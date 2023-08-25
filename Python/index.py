# Day 1

# print(3 + 5)
# print(1 + 4.5)
# print(100 - 56)
# print( 3 * 3)
# print(6/2)

# string1 = "Mumbai" 
# print(string1)

# num = 34 
# print(num)

# num1 = 4.5 
# print(num1)


# status = False
# print(status)

# print(age)
# age = 25


# a = 5
#     b = 5
# print(a+b)

# a=1
# print(a)
# a=3
# print(a)


# a = 4
# b = 5
# result = a * 3 + b 
# print(result)


# user_input = input() 
# print( user_input + " Hi Good Evening")

# word = "Hai" + " Good Night"
# print(word + "Kaylani")

# star = " * "
# print( star * 100)


# count = int(input())
# stars = " * "
# print(stars * count)
# print(len(stars * count))

# name = "Hello Everyone"
# print(name[5])
# print(len(name))

# val1 = 44
# print(type(val1))
# val2 = float(val1)
# print(type(val2))
# print(val2)

# val1 = True
# print(type(val1))
# val2 = str(val1)
# print(type(val2))
# print(val2)

# int()
# float()
# bool()
# str()

# text = input()
# number = int(input())
# msg = "This message is repeating " + str(number) + " of times  " +  text * number
# print(msg)


# ------------------------------------------------------------------------------------

# Day 2

# print(5 > 2)
# print(5 < 10)
# print(4 <= 4)
# print(6 >= 5)
# print(11 == 11)
# print(234 != 432)

# print(((2 > 1) and (4 >= 4)) or ("abc" == "ABC"))
# print((1 == 1.0) or (45 > 990))
# print(not( 4 > 5))

# print(5 % 2) #to get the remainder of an number
# print(5 ** 5) #to find the power  of a number
# print(int(190 ** 0.5)) #to find the Square root of the given number


# num = 5

# if (num > 5):
#     print("Number is Greater than 5")
#     result = 5 * num
#     print(result)
# else:
#     print("Number is Less than 5")
#     result = 5 * num
#     print(result)


# num = 11

# if num > 15:
#     print("Number is Greater than 15")
#     if (num % 2 == 0):
#         print("Number is Divisible by 2")
#     else:
#         print("Number is not Divisible by 2")
# else:
#     print("Number is Less than 15")
#     if (num % 3 == 0):
#         print("Number is Divisible by 3")
#     else:
#         print("Number is not Divisible by 3")


# a = 24
# b = 24
# c = 24

# if (a > b) and (a > c):
#     print("a is greater than b and c")
# elif (a == b == c):
#     print("a,b,c are equal")
# else:
#     if (b > c):
#         print("b is greater than a and c")
#     else:
#         print("c is greater than a and b")


# n = 52

# if (n % 10 == 0):
#     print("Given Number n is divisible by 10")
# elif (n % 5 == 0):
#     print("Given Number n is divisible by 5")
# else:
#     print("Given Number n is not divisible by 10 and 5")

# value = input()

# if (int(value) % 2 == 0) :
#     print(value + " is divisble by 2")
# else:
#     print(value + " is not divisble by 2")

# ------------------------------------------------------------------------------------

# Day 3

#While Loop


# count = 1 # Initialization
# while count <= 10: # Termination Condition
#     print("Hello World " * count) # Block of Code
#     count = count + 1 # Updation


# count = 0
# while count <= 20 :
#     if count % 2 == 0:
#         print(count)
#     count = count + 2


# count = 1
# while count <= 6:
#     result = count * 5
#     print("5" + " * " + str(count) + " = " + str(result) )
#     count = count + 1


# ------------------------------------------------------------------------------------

# Day 4

#For Loop

# nums = "0123456789" # sequence of characters
# for i in nums: # for loop 
#     result = int(i) + 10
#     print(result)


# print("...............................")

# nums = "0123456789"
# count = 0
# while count < len(nums):
#     result = int(nums[count]) + 10
#     print(result) 
#     count = count + 1

# word = "INDIA"
# for item in word:
#     print(" *** " + item + " *** ")


# n1 = int(input())
# n2 = int(input())
# for n in range(n1,n2+1):
#     print(n)


#We need to find out the lengths of given two strings and have to sum them and
#if sum > 15 print the even numbers from 0
#if sum < 15 print the odd numbers from 1

# name1 = input()
# name2 = input()

# length1 = len(name1)
# length2 = len(name2)

# sum_lengths = length1 + length2
# print(sum_lengths)

# if sum_lengths > 15 :
#     for n in range(0, sum_lengths+1):
#         if n%2 == 0:
#             print(n)
# else:
#     count = 1
#     while count <= sum_lengths:
#         if count%2 == 1:
#             print(count)
#         count = count+1


#We need to find out the lengths of given two strings and have to sum them and
#if sum > 15 print the even numbers from 0
#if sum < 15 print the odd numbers from 1

#We need to find out the lengths of given two strings and have to find the greater one
#then print every single character of the larger sting like "***" + Char + "***"

