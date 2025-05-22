# dialoghi standard
execute if predicate atherion:common as @s run blabber dialogue start atherion:master/common/warrior
execute if predicate atherion:warrior/t0 as @s run blabber dialogue start atherion:master/warrior/t0
#dialoghi se fai parte di un altra gilda
execute if predicate atherion:is_a/alchemist as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_alchemist
execute if predicate atherion:is_a/archer as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_archer
execute if predicate atherion:is_a/blacksmith as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_blacksmith
execute if predicate atherion:is_a/carpenter as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_carpenter
execute if predicate atherion:is_a/chef as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_chef
execute if predicate atherion:is_a/farmer as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_farmer
execute if predicate atherion:is_a/mage as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_mage
execute if predicate atherion:is_a/miner as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_miner
execute if predicate atherion:is_a/shadow as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_shadow