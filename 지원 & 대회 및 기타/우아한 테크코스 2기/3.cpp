#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> prices, vector<int> discounts) {
	int answer = 0;

	int temp;
	for (int i = 0; i < prices.size(); i++) {
		for (int j = i + 1; j < prices.size(); j++) {
			if (prices[i] < prices[j]) {
				swap(prices[i], prices[j]);
			}
		}
	}

	for (int i = 0; i < discounts.size(); i++) {
		for (int j = i + 1; j < discounts.size(); j++) {
			if (discounts[i] < discounts[j]) {
				swap(discounts[i], discounts[j]);
			}
		}
	}

	float calc;
	for (int i = 0; i < discounts.size(); i++) {
		calc = 100 - discounts[i];
		calc = prices[i] * (calc / 100);
		prices[i] = (int)calc;
	}

	for (int i = 0; i < prices.size(); i++) {
		answer += prices[i];
	}

	return answer;
}