# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
def odd_or_even(num)
  if num % 2 == 0
    print "#{num} is odd"
  else
    print "#{num} is even"
  end
end

num1 = 7
def odd_or_even(num1)
  if num % 2 == 0
    print "#{7} is odd"
  else
    print "#{7} is even"
  end
end
# Expected output: '7 is odd'

num2 = 42
def odd_or_even(42)
  if num % 2 == 0
    print "#{42} is odd"
  else
    print "#{42} is even"
  end
end
#Expected output: '42 is even'

num3 = 221
def odd_or_even(221)
  if num % 2 == 0
    print "#{221} is odd"
  else
    print "#{221} is even"
  end
end
# Expected output: '221 is odd'

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# function: album.delete. "aeiou"

def disemvowel_2(string == album)
  string_array = album.split('')
  string_array.delete('a','e','i','o','u')
end

album1 = 'Rubber Soul'
def disemvowel_2(string == album1)
  string_array = album1.split('')
  string_array.delete('a','e','i','o','u')
end
# Expected output: 'Rbbr Sl'

# album2 = 'Sgt Pepper'
def disemvowel_2(string == album2)
  string_array = album2.split('')
  string_array.delete('a','e','i','o','u')
end
# # Expected output: 'Sgt Pppr'

album3 = 'Abbey Road'
def disemvowel_2(string == album3)
  string_array = album3.split('')
  string_array.delete('a','e','i','o','u')
end
# # Expected output: 'bby Rd'
#

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.
def palindrome?(string == is_palindrome )
 if is_palindrome == is_palindrome.reverse
   "#{is_palindrome} is a palindrome"
 else
   puts "#{is_palindrome} is not a palindrome"
 end
end

is_palindrome1 = 'Racecar'
def is_palindrome1 == is_palindrome1.reverse
 "#{'is_palindrome1'} is a palindrome"
end
# Expected output: 'Racecar is a palindrome'

is_palindrome2 = 'LEARN'
def is_palindrome2 == is_palindrome2.reverse
 "#{'is_palindrome2'} is a palindrome"
end
# Expected output: 'LEARN is not a palindrome'

is_palindrome3 = 'Rotator'
def is_palindrome3 == is_palindrome3.reverse
 "#{'is_palindrome3'} is a palindrome"
end
# Expected output: 'Rotator is a palindrome'
