def bubble_sort(arr)
  return arr if arr.empty?

  i = 0
  while i < arr.length
    s = 0
    while s < arr.length - 1
      if arr[s] > arr[s + 1]
        arr[s], arr[s + 1] = arr[s + 1], arr[s]
      end
      s += 1
    end
    i += 1
  end
  arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [1, 2, 3, 4]"
  print "=> "
  print bubble_sort([3, 2, 1, 4])

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print bubble_sort([1, 2, 3])

  puts

  puts "Expecting: []"
  print "=> "
  print bubble_sort([])

  puts

  puts "Expecting: [1, 2, 3]"
  print "=> "
  print bubble_sort([2, 3, 1])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
