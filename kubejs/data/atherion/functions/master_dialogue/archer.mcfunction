# asdjsd
execute if predicate atherion:common as @s run blabber dialogue start atherion:master/common/archer
execute if predicate atherion:archer/t0 as @s run blabber dialogue start atherion:master/archer/t0
#dialoghi se fai parte di un altra gilda
execute if predicate atherion:is_a/alchemist as @s run blabber dialogue start atherion:master/wrong_guild/archer/to_alchemist
execute if predicate atherion:is_a/bard as @s run blabber dialogue start atherion:master/wrong_guild/bard/to_archer
execute if predicate atherion:is_a/blacksmith as @s run blabber dialogue start atherion:master/wrong_guild/blacksmith/to_archer
execute if predicate atherion:is_a/carpenter as @s run blabber dialogue start atherion:master/wrong_guild/carpenter/to_archer
execute if predicate atherion:is_a/chef as @s run blabber dialogue start atherion:master/wrong_guild/chef/to_archer
execute if predicate atherion:is_a/farmer as @s run blabber dialogue start atherion:master/wrong_guild/farmer/to_archer
execute if predicate atherion:is_a/mage as @s run blabber dialogue start atherion:master/wrong_guild/mage/to_archer
execute if predicate atherion:is_a/miner as @s run blabber dialogue start atherion:master/wrong_guild/miner/to_archer
execute if predicate atherion:is_a/shadow as @s run blabber dialogue start atherion:master/wrong_guild/shadow/to_archer
execute if predicate atherion:is_a/warrior as @s run blabber dialogue start atherion:master/wrong_guild/warrior/to_archer