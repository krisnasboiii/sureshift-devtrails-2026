from rest_framework.decorators import api_view
from rest_framework.response import Response

LOCATION_RISK = {
    'mumbai': 10, 'chennai': 10, 'kolkata': 10,
    'delhi': 5, 'hyderabad': 5, 'bengaluru': 5,
    'pune': 0, 'jaipur': 0, 'ahmedabad': 0,
}

SEASON_RISK = {
    'monsoon': 10,
    'winter': 5,
    'summer': 0,
}

@api_view(['POST'])
def calculate_premium(request):
    city = request.data.get('city', '').lower()
    season = request.data.get('season', 'summer').lower()
    past_claims = int(request.data.get('past_claims', 0))

    base = 30
    location = LOCATION_RISK.get(city, 0)
    season_adj = SEASON_RISK.get(season, 0)

    if past_claims == 0:
        history = -3
    elif past_claims <= 2:
        history = 0
    else:
        history = 8

    premium = base + location + season_adj + history
    premium = max(22, min(60, premium))

    return Response({
        'base': base,
        'location_risk': location,
        'season_risk': season_adj,
        'history_adjustment': history,
        'final_premium': premium,
        'coverage': 600,
        'duration': '7 days'
    })
