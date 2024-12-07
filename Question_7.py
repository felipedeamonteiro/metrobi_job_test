def get_max_value(carrot_types, capacity):
    # Create a list to store the maximum value for each weight
    dp = [0] * (capacity + 1)

    # Iterate through each weight capacity from 1 to the given capacity
    for current_capacity in range(1, capacity + 1):
        for carrot in carrot_types:
            if carrot['kg'] <= current_capacity:
                # Update dp[current_capacity] if taking this carrot increases the value
                dp[current_capacity] = max(
                    dp[current_capacity],
                    dp[current_capacity - carrot['kg']] + carrot['price']
                )

    # The last entry in the dp array contains the maximum value
    return dp[capacity]

# Example usage
carrot_types = [
    {"kg": 5, "price": 100},
    {"kg": 7, "price": 150},
    {"kg": 3, "price": 70}
]
capacity = 36

print(get_max_value(carrot_types, capacity))  # Output: 840
