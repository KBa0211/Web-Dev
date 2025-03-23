def max_end3(nums):
  if nums[0] > nums[2] or nums[0] == nums[2] :
    return [nums[0],nums[0],nums[0]]
  elif nums[2] > nums[0] or nums[2] == nums[0]:
    return [nums[2],nums[2],nums[2]]
