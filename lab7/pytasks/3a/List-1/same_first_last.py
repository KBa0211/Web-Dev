def same_first_last(nums):
  for i in nums:
    if nums[0] == nums[-1]:
      return True
    else: 
      return False
#return len(nums) >= 1 and nums[0] == nums[-1]